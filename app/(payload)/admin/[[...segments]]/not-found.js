import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '../../../../payload.config'

const NotFound = ({ params, searchParams }) => 
  NotFoundPage({ config, importMap, params, searchParams })

export default NotFound
