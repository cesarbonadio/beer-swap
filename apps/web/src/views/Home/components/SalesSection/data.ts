import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('PancakeSwap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('ICZ makes our world go round.'),
  bodyText: t(
    'ICZ token is at the heart of the InveCoinz ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x10be866a844c3a4d94b5cea47dc6c46151d1c9ea&chainId=56',
    text: t('Buy ICZ '),
    external: false,
  },
  secondaryButton: {
    to: 'https://nomics.com/assets/icz3-invecoinz-v2',
    text: t('Live Price'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'chartwarning2', alt: t('Token') },
    ],
  },
})
