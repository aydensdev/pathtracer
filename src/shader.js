import { uv, vec3, Fn } from 'three/tsl';

export const shader = Fn(() => {
    return vec3(uv(), 0)
});