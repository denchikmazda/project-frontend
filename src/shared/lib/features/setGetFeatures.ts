import { FeatureFlags } from '@/shared/types/featureFlags';

// Фичи не меняются в ходе сеанса, их необязательно делать реактивными!!!
let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}
// TODO featuresFlags is undefined
export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}
