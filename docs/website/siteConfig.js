/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'MonetaryCoin',
  tagline: 'Solidity Smart Contracts documentation',
  url: 'https://monetary-foundation.github.io',
  baseUrl: '/MonetaryCoin/',
  projectName: 'monetarycoin',
  organizationName: 'monetary-foundation',
  headerLinks: [
    {
      href: 'https://monetary.org',
      label: 'Home',
    },
    {
      doc: 'monetarycoin',
      label: 'Docs',
    },
    {
      doc: 'deploy_MCoin',
      label: 'API',
    },
    {
      href: 'https://github.com/Monetary-Foundation/MonetaryCoin',
      label: 'Github',
    },
  ],
  headerIcon: 'img/logo-monetarycoin.png',
  footerIcon: 'img/symbol-monetarycoin.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#1890ff',
    secondaryColor: 'white',
  },
  copyright: 'Copyright © 2018 The Monetary foundation',
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: [
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,700,400italic,700italic',
  ],
  repoUrl: 'https://github.com/Monetary-Foundation/MonetaryCoin',
};

module.exports = siteConfig;
