import { i18n, Messages } from '@lingui/core';
import { detect, fromHtmlTag, fromNavigator, fromStorage, fromUrl } from '@lingui/detect-locale';

import { messages as enMessages } from './en/messages';
import { en } from './plurals';

i18n.loadLocaleData('en', { plurals: en });
// @ts-expect-error: The type from lingui is incorrect.
i18n.load('en', enMessages as Messages);
i18n.activate('en');

export type {
  AllLocaleData,
  AllMessages,
  I18n,
  Locale,
  LocaleData,
  Locales,
  MessageDescriptor,
  Messages,
} from '@lingui/core';
export { formats, setupI18n } from '@lingui/core';
export { i18n };

/**
 * Detect the locale that is being
 */
export function detectLocale(key = 'lang', fallback = 'en'): string {
  return detect(fromUrl(key), fromHtmlTag('html'), fromStorage(key), fromNavigator()) ?? fallback;
}
