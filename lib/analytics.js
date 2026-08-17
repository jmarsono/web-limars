/** lib/analytics.js - GA4 Conversion Event Tracking */

export const GA_EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PRODUCT_VIEW: 'product_view',
  SERVICE_VIEW: 'service_view',
  PROJECT_VIEW: 'project_view',
  GET_QUOTE_CLICK: 'get_quote_click',
};

/**
 * Track GA4 event
 * @param {string} eventName - GA4 event name
 * @param {Object} params - Additional event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  // Use gtag if available (Next.js @next/third-parties/google)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Fallback: push to dataLayer
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(context = {}) {
  trackEvent(GA_EVENTS.WHATSAPP_CLICK, {
    event_category: 'engagement',
    event_label: context.label || 'whatsapp_button',
    source_page: context.sourcePage || window.location.pathname,
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(formData = {}) {
  trackEvent(GA_EVENTS.CONTACT_FORM_SUBMIT, {
    event_category: 'lead_generation',
    service_interest: formData.service || 'unknown',
    has_company: !!formData.company,
    has_phone: !!formData.phone,
  });
}

/**
 * Track product view
 */
export function trackProductView(product) {
  trackEvent(GA_EVENTS.PRODUCT_VIEW, {
    event_category: 'product_engagement',
    product_id: product.id,
    product_name: product.name,
    product_category: product.category,
  });
}

/**
 * Track service view
 */
export function trackServiceView(service) {
  trackEvent(GA_EVENTS.SERVICE_VIEW, {
    event_category: 'service_engagement',
    service_id: service.id,
    service_name: service.title,
  });
}

/**
 * Track project view
 */
export function trackProjectView(project) {
  trackEvent(GA_EVENTS.PROJECT_VIEW, {
    event_category: 'portfolio_engagement',
    project_id: project.id,
    project_name: project.name,
    project_category: project.category,
  });
}

/**
 * Track Get Quote CTA click
 */
export function trackGetQuoteClick(context = {}) {
  trackEvent(GA_EVENTS.GET_QUOTE_CLICK, {
    event_category: 'cta_click',
    source_page: context.sourcePage || window.location.pathname,
    button_text: context.buttonText || 'get_quote',
  });
}