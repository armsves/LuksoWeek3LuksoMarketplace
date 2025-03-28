import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    quietDeps: true,
  },
  images: {
    domains: ['api.universalprofile.cloud','h6tgmhtrk6y53ttb.public.blob.vercel-storage.com','yl896n2rx64kydxz.public.blob.vercel-storage.com']
  },
};

export default nextConfig;
