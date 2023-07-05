export default {
  credentials: {
    preview: {
      orgId: process.env.THREEKIT_PREVIEW_ORG_ID,
      publicToken: process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN,
    },
    'admin-fts': {
      orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
      publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    },
  },

  products: {
    preview: {
      assetId:'c3d30f69-df44-42c1-8c88-14d856a458d7',
      configurationId: undefined,
      stageId: undefined,
    },
    'admin-fts': {
      assetId: 'c3d30f69-df44-42c1-8c88-14d856a458d7',
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
