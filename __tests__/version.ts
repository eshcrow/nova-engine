
/*
*   NovaEngine - CoreSystem - version - test
*   author: Aurélien Dupays Dexemple
*/

import { version }                                          from '../src/core-system/version';

it('version should be equals to 1.0.0-alpha', () => {
    expect(version).toBe('1.0.0-alpha');
});
