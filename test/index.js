import test from 'ava';
import nodeReference from '../';

// test('should fetch apis', async (t) => {
//   try {
//     const apis = await nodeReference.fetchApiList();
//
//     t.truthy(Array.isArray(apis));
//     t.is(typeof apis[0].name, 'string');
//     t.is(typeof apis[0].path, 'string');
//   } catch(e) {
//     console.error(e);
//     t.fail();
//   }
// });

test('should fetch api', async (t) => {
  try {
    const apis = await nodeReference.fetchApiList();

    if (apis.length !== 0) {
      const api = apis[0];

      const res = await nodeReference.fetchApi(api.path);

      console.log(res)
    }
    else {
      throw new Error('cannot fetch apis');
    }
  } catch(e) {
    console.error(e);
    t.fail();
  }
});
