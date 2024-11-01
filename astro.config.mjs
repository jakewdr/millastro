// @ts-check
import { defineConfig } from 'astro/config';

import MillionLint from "@million/lint";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), MillionLint.astro()]
});

