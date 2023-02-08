console.log('helloworld from content script');

const test = () => {
  document.querySelectorAll('*').forEach((elem) => {
    // this gets ALL the elements on the page.
    elem.remove();
  });

  setTimeout(() => {
    fetch(
      '/en/usercenter/settings/general',
      // '/bapi/asset/v2/private/asset-service/wallet/balance?needBalanceDetail=true&quoteAsset=BTC',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Bnc-Location': 'BINANCE',
          'Bnc-Uuid': 'b94a3e66-9796-41de-8067-ff13ea1c0916',
          // csrftoken: 'c8bed3e746329c7d13e2ec42f331d4f5',
          clienttype: 'web',
        },
        credentials: 'include',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('To Serafim:', data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch request:', error);
      });
  }, 1000);
};

const request = (): void => {
  console.log('request');

  // setTimeout(() => {
  //   test();
  // }, 1000);
  // fetch(
  //   '/bapi/asset/v2/private/asset-service/wallet/balance?needBalanceDetail=true&quoteAsset=BTC'
  // );

  // fetch('https://www.google.com');
};

// document.addEventListener('load', () => {
request();
// });

export {};
