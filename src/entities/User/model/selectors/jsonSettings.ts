import { JsonSettings } from '../types/jsonSettings';

import { buildSelector } from '@/shared/lib/store';

const defaultJsonSeettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSeettings,
);
