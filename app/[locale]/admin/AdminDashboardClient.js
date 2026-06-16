// app/[locale]/admin/AdminDashboardClient.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  logoutAction, 
  uploadMediaAction,
  saveProductAction, deleteProductAction,
  saveProjectAction, deleteProjectAction,
  saveFaqAction, deleteFaqAction 
} from './actions';
import styles from './AdminDashboard.module.css';

export default function AdminDashboardClient({ initialProducts, initialProjects, initialFaqs, username }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(initialProducts);
  const [projects, setProjects] = useState(initialProjects);
  const [faqs, setFaqs] = useState(initialFaqs);

  // Form states
  const [editingItem, setEditingItem] = useState(null); // { type: 'product'|'project'|'faq', data: {...} }
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
    router.push('/admin/login');
  };

  // Upload handler
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await uploadMediaAction(formData);
      if (res.success) {
        setEditingItem(prev => ({
          ...prev,
          data: { ...prev.data, image: res.url }
        }));
      }
    } catch (err) {
      setError(err.message || 'Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  // CRUD Actions
  const handleEditClick = (type, item) => {
    setError('');
    if (item) {
      // Deep clone to avoid immediate state updates in listings
      setEditingItem({ type, data: JSON.parse(JSON.stringify(item)) });
    } else {
      // New item initial state
      const initialData = type === 'product' ? {
        slug: '',
        name_en: '', name_id: '',
        category_en: 'Traditional Stoves', category_id: 'Kompor Tradisional',
        short_description_en: '', short_description_id: '',
        description_en: '', description_id: '',
        specs: {}, image: '', featured: false
      } : type === 'project' ? {
        slug: '',
        name_en: '', name_id: '',
        category_en: '', category_id: '',
        location_en: '', location_id: '',
        description_en: '', description_id: '',
        image: '', scope: [], featured: false
      } : {
        category_en: 'General', category_id: 'Umum',
        question_en: '', question_id: '',
        answer_en: '', answer_id: ''
      };
      setEditingItem({ type, data: initialData });
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    setError('');
    try {
      if (type === 'product') {
        await deleteProductAction(id);
        setProducts(prev => prev.filter(p => p.id !== id));
      } else if (type === 'project') {
        await deleteProjectAction(id);
        setProjects(prev => prev.filter(p => p.id !== id));
      } else if (type === 'faq') {
        await deleteFaqAction(id);
        setFaqs(prev => prev.filter(f => f.id !== id));
      }
      router.refresh();
    } catch (err) {
      setError('Failed to delete item.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const { type, data } = editingItem;

    try {
      if (type === 'product') {
        // Map localized keys back for the API
        const payload = {
          id: data.id,
          slug: data.slug,
          name_en: data.name?.en || data.name_en || '',
          name_id: data.name?.id || data.name_id || '',
          category_en: data.category?.en || data.category_en || 'Traditional Stoves',
          category_id: data.category?.id || data.category_id || 'Kompor Tradisional',
          short_description_en: data.shortDescription?.en || data.short_description_en || '',
          short_description_id: data.shortDescription?.id || data.short_description_id || '',
          description_en: data.description?.en || data.description_en || '',
          description_id: data.description?.id || data.description_id || '',
          specs: data.specs || {},
          image: data.image || '',
          featured: data.featured
        };

        const res = await saveProductAction(payload);
        if (res.success) {
          // Re-fetch list or reload dashboard
          setEditingItem(null);
          window.location.reload();
        }
      } else if (type === 'project') {
        const payload = {
          id: data.id,
          slug: data.slug,
          name_en: data.name?.en || data.name_en || '',
          name_id: data.name?.id || data.name_id || '',
          category_en: data.category?.en || data.category_en || '',
          category_id: data.category?.id || data.category_id || '',
          location_en: data.location?.en || data.location_en || '',
          location_id: data.location?.id || data.location_id || '',
          description_en: data.description?.en || data.description_en || '',
          description_id: data.description?.id || data.description_id || '',
          image: data.image || '',
          scope: data.scope || [],
          featured: data.featured
        };

        const res = await saveProjectAction(payload);
        if (res.success) {
          setEditingItem(null);
          window.location.reload();
        }
      } else if (type === 'faq') {
        const payload = {
          id: data.id,
          category_en: data.category?.en || data.category_en || 'General',
          category_id: data.category?.id || data.category_id || 'Umum',
          question_en: data.question?.en || data.question_en || '',
          question_id: data.question?.id || data.question_id || '',
          answer_en: data.answer?.en || data.answer_en || '',
          answer_id: data.answer?.id || data.answer_id || ''
        };

        const res = await saveFaqAction(payload);
        if (res.success) {
          setEditingItem(null);
          window.location.reload();
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to save item.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>Admin Dashboard</h1>
          <span>Welcome back, <strong>{username}</strong></span>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
      </header>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'products' ? styles.tabActive : ''} 
          onClick={() => { setActiveTab('products'); setEditingItem(null); }}
        >
          📦 Products
        </button>
        <button 
          className={activeTab === 'projects' ? styles.tabActive : ''} 
          onClick={() => { setActiveTab('projects'); setEditingItem(null); }}
        >
          🏗️ Projects
        </button>
        <button 
          className={activeTab === 'faqs' ? styles.tabActive : ''} 
          onClick={() => { setActiveTab('faqs'); setEditingItem(null); }}
        >
          ❓ FAQs
        </button>
      </div>

      <div className={styles.content}>
        {error && <div className={styles.error}>{error}</div>}

        {/* LISTINGS & FORMS SPLIT */}
        <div className={styles.grid}>
          {/* LEFT LIST COLUMN */}
          <div className={styles.listCol}>
            <div className={styles.listHeader}>
              <h3>Manage {activeTab.toUpperCase()}</h3>
              <button 
                onClick={() => handleEditClick(activeTab === 'products' ? 'product' : activeTab === 'projects' ? 'project' : 'faq')}
                className={styles.addBtn}
              >
                + Add New
              </button>
            </div>

            <div className={styles.list}>
              {activeTab === 'products' && products.map(item => (
                <div key={item.id} className={styles.listItem}>
                  <div>
                    <strong>{item.name?.id || item.name_id || item.slug}</strong>
                    <p>{item.category?.id || item.category_id}</p>
                  </div>
                  <div className={styles.listActions}>
                    <button onClick={() => handleEditClick('product', item)} className={styles.editBtn}>Edit</button>
                    <button onClick={() => handleDelete('product', item.id)} className={styles.deleteBtn}>Delete</button>
                  </div>
                </div>
              ))}

              {activeTab === 'projects' && projects.map(item => (
                <div key={item.id} className={styles.listItem}>
                  <div>
                    <strong>{item.name?.id || item.name_id || item.slug}</strong>
                    <p>{item.location?.id || item.location_id}</p>
                  </div>
                  <div className={styles.listActions}>
                    <button onClick={() => handleEditClick('project', item)} className={styles.editBtn}>Edit</button>
                    <button onClick={() => handleDelete('project', item.id)} className={styles.deleteBtn}>Delete</button>
                  </div>
                </div>
              ))}

              {activeTab === 'faqs' && faqs.map(item => (
                <div key={item.id} className={styles.listItem}>
                  <div className={styles.faqInfo}>
                    <strong>Q: {item.question?.id || item.question_id}</strong>
                    <p>A: {item.answer?.id || item.answer_id}</p>
                  </div>
                  <div className={styles.listActions}>
                    <button onClick={() => handleEditClick('faq', item)} className={styles.editBtn}>Edit</button>
                    <button onClick={() => handleDelete('faq', item.id)} className={styles.deleteBtn}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT EDIT FORM COLUMN */}
          <div className={styles.formCol}>
            {editingItem ? (
              <form onSubmit={handleSave} className={styles.form}>
                <h3>{editingItem.data.id ? 'Edit' : 'Create'} {editingItem.type.toUpperCase()}</h3>
                
                {/* --- PRODUCT FORM --- */}
                {editingItem.type === 'product' && (
                  <>
                    <div className={styles.formGroup}>
                      <label>Slug (Unique identifier URL, e.g. 'wok-range')</label>
                      <input 
                        type="text" 
                        value={editingItem.data.slug} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, slug: e.target.value }})} 
                        required 
                      />
                    </div>
                    
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Name (English)</label>
                        <input 
                          type="text" 
                          value={editingItem.data.name?.en || editingItem.data.name_en || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, name_en: e.target.value, name: { ...editingItem.data.name, en: e.target.value } }})} 
                          required 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Nama (Indonesia)</label>
                        <input 
                          type="text" 
                          value={editingItem.data.name?.id || editingItem.data.name_id || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, name_id: e.target.value, name: { ...editingItem.data.name, id: e.target.value } }})} 
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Category (English)</label>
                        <select 
                          value={editingItem.data.category?.en || editingItem.data.category_en || 'Traditional Stoves'} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_en: e.target.value, category: { ...editingItem.data.category, en: e.target.value } }})}
                        >
                          <option value="Traditional Stoves">Traditional Stoves</option>
                          <option value="Regional Ovens">Regional Ovens</option>
                          <option value="Modern Ovens">Modern Ovens</option>
                          <option value="Kitchen Equipment">Kitchen Equipment</option>
                          <option value="Coffee Shop Equipment">Coffee Shop Equipment</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Kategori (Indonesia)</label>
                        <select 
                          value={editingItem.data.category?.id || editingItem.data.category_id || 'Kompor Tradisional'} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_id: e.target.value, category: { ...editingItem.data.category, id: e.target.value } }})}
                        >
                          <option value="Kompor Tradisional">Kompor Tradisional</option>
                          <option value="Oven Regional">Oven Regional</option>
                          <option value="Oven Modern">Oven Modern</option>
                          <option value="Perlengkapan Dapur">Perlengkapan Dapur</option>
                          <option value="Peralatan Kedai Kopi">Peralatan Kedai Kopi</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Short Description (English)</label>
                      <input 
                        type="text" 
                        value={editingItem.data.shortDescription?.en || editingItem.data.short_description_en || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, short_description_en: e.target.value, shortDescription: { ...editingItem.data.shortDescription, en: e.target.value } }})} 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi Singkat (Indonesia)</label>
                      <input 
                        type="text" 
                        value={editingItem.data.shortDescription?.id || editingItem.data.short_description_id || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, short_description_id: e.target.value, shortDescription: { ...editingItem.data.shortDescription, id: e.target.value } }})} 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Description (English)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.description?.en || editingItem.data.description_en || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, description_en: e.target.value, description: { ...editingItem.data.description, en: e.target.value } }})} 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi Lengkap (Indonesia)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.description?.id || editingItem.data.description_id || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, description_id: e.target.value, description: { ...editingItem.data.description, id: e.target.value } }})} 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Specifications (Format: key: value, separate by new lines)</label>
                      <textarea 
                        rows={4}
                        placeholder="material: Stainless Steel 304&#10;btuOutput: 80,000 BTU&#10;dimensions: 1200 x 800 x 850 mm"
                        value={Object.entries(editingItem.data.specs || {}).map(([k, v]) => `${k}: ${typeof v === 'object' ? v.id || v.en || '' : v}`).join('\n')}
                        onChange={e => {
                          const lines = e.target.value.split('\n');
                          const specs = {};
                          lines.forEach(l => {
                            const [k, ...vParts] = l.split(':');
                            if (k && vParts.length > 0) {
                              specs[k.trim()] = vParts.join(':').trim();
                            }
                          });
                          setEditingItem({ ...editingItem, data: { ...editingItem.data, specs }});
                        }}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Image Image URL or Upload below</label>
                      <input 
                        type="text" 
                        value={editingItem.data.image || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, image: e.target.value }})}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Upload Image File to R2</label>
                      <input type="file" accept="image/*" onChange={handleFileUpload} />
                      {uploading && <span className={styles.uploadingText}>Uploading image...</span>}
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input 
                        type="checkbox" 
                        id="featured" 
                        checked={editingItem.data.featured || false} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, featured: e.target.checked }})}
                      />
                      <label htmlFor="featured">Featured Product (Shown on homepage)</label>
                    </div>
                  </>
                )}

                {/* --- PROJECT FORM --- */}
                {editingItem.type === 'project' && (
                  <>
                    <div className={styles.formGroup}>
                      <label>Slug (Unique identifier URL)</label>
                      <input 
                        type="text" 
                        value={editingItem.data.slug} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, slug: e.target.value }})} 
                        required 
                      />
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Project Name (English)</label>
                        <input 
                          type="text" 
                          value={editingItem.data.name?.en || editingItem.data.name_en || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, name_en: e.target.value, name: { ...editingItem.data.name, en: e.target.value } }})} 
                          required 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Nama Proyek (Indonesia)</label>
                        <input 
                          type="text" 
                          value={editingItem.data.name?.id || editingItem.data.name_id || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, name_id: e.target.value, name: { ...editingItem.data.name, id: e.target.value } }})} 
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Category (English)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Restaurant Kitchen, Hotel"
                          value={editingItem.data.category?.en || editingItem.data.category_en || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_en: e.target.value, category: { ...editingItem.data.category, en: e.target.value } }})} 
                          required 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Kategori (Indonesia)</label>
                        <input 
                          type="text" 
                          placeholder="misal: Dapur Restoran, Hotel"
                          value={editingItem.data.category?.id || editingItem.data.category_id || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_id: e.target.value, category: { ...editingItem.data.category, id: e.target.value } }})} 
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Location (English)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Jakarta, Indonesia"
                          value={editingItem.data.location?.en || editingItem.data.location_en || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, location_en: e.target.value, location: { ...editingItem.data.location, en: e.target.value } }})} 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Lokasi (Indonesia)</label>
                        <input 
                          type="text" 
                          placeholder="misal: Jakarta, Indonesia"
                          value={editingItem.data.location?.id || editingItem.data.location_id || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, location_id: e.target.value, location: { ...editingItem.data.location, id: e.target.value } }})} 
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Description (English)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.description?.en || editingItem.data.description_en || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, description_en: e.target.value, description: { ...editingItem.data.description, en: e.target.value } }})} 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi (Indonesia)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.description?.id || editingItem.data.description_id || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, description_id: e.target.value, description: { ...editingItem.data.description, id: e.target.value } }})} 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Scope of Work (Separate by commas: en: id, en2: id2...)</label>
                      <textarea 
                        rows={3}
                        placeholder="Exhaust ducting: Instalasi ducting, Commercial kitchen set: Kitchen set komersial"
                        value={(editingItem.data.scope || []).map(s => `${s.en || ''}: ${s.id || ''}`).join(', ')}
                        onChange={e => {
                          const items = e.target.value.split(',');
                          const scope = items.map(item => {
                            const [en, id] = item.split(':');
                            return { en: (en || '').trim(), id: (id || '').trim() };
                          }).filter(s => s.en || s.id);
                          setEditingItem({ ...editingItem, data: { ...editingItem.data, scope }});
                        }}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Image URL</label>
                      <input 
                        type="text" 
                        value={editingItem.data.image || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, image: e.target.value }})}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Upload Image File to R2</label>
                      <input type="file" accept="image/*" onChange={handleFileUpload} />
                      {uploading && <span className={styles.uploadingText}>Uploading image...</span>}
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input 
                        type="checkbox" 
                        id="featured" 
                        checked={editingItem.data.featured || false} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, featured: e.target.checked }})}
                      />
                      <label htmlFor="featured">Featured Project (Shown on homepage)</label>
                    </div>
                  </>
                )}

                {/* --- FAQ FORM --- */}
                {editingItem.type === 'faq' && (
                  <>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Category (English)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Products, Services, Ordering, General"
                          value={editingItem.data.category?.en || editingItem.data.category_en || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_en: e.target.value, category: { ...editingItem.data.category, en: e.target.value } }})} 
                          required 
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Kategori (Indonesia)</label>
                        <input 
                          type="text" 
                          placeholder="misal: Produk, Layanan, Pemesanan, Umum"
                          value={editingItem.data.category?.id || editingItem.data.category_id || ''} 
                          onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, category_id: e.target.value, category: { ...editingItem.data.category, id: e.target.value } }})} 
                          required 
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Question (English)</label>
                      <input 
                        type="text" 
                        value={editingItem.data.question?.en || editingItem.data.question_en || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, question_en: e.target.value, question: { ...editingItem.data.question, en: e.target.value } }})} 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Pertanyaan (Indonesia)</label>
                      <input 
                        type="text" 
                        value={editingItem.data.question?.id || editingItem.data.question_id || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, question_id: e.target.value, question: { ...editingItem.data.question, id: e.target.value } }})} 
                        required 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Answer (English)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.answer?.en || editingItem.data.answer_en || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, answer_en: e.target.value, answer: { ...editingItem.data.answer, en: e.target.value } }})} 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Jawaban (Indonesia)</label>
                      <textarea 
                        rows={3}
                        value={editingItem.data.answer?.id || editingItem.data.answer_id || ''} 
                        onChange={e => setEditingItem({ ...editingItem, data: { ...editingItem.data, answer_id: e.target.value, answer: { ...editingItem.data.answer, id: e.target.value } }})} 
                        required 
                      />
                    </div>
                  </>
                )}

                <div className={styles.formActions}>
                  <button type="button" onClick={() => setEditingItem(null)} className={styles.cancelBtn}>Cancel</button>
                  <button type="submit" disabled={saving || uploading} className={styles.saveBtn}>
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.noForm}>
                <p>Select an item to edit, or click <strong>+ Add New</strong> to create one.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
