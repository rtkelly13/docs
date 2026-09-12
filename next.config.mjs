import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ['@rtkelly13/design-system', '@rtkelly/mermaid-toolkit'],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

export default nextConfig;
