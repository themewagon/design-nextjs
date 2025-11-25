/** @type {import('next').NextConfig} */
const isProd = true;
const basePath = isProd ? '/design-nextjs' : ''

const nextConfig = {
	basePath,
	assetPrefix: basePath,
	trailingSlash: true,
	output: 'export',
    images:{
        unoptimized:true,
    },
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
}

module.exports = nextConfig
