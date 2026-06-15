import { RootPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '../../../../payload.config'

const Page = ({ params, searchParams }) => 
  RootPage({ config, importMap, params, searchParams })

export default Page
