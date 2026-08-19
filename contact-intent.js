(() => {
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (!isAndroid) return;

  const fallbackUrl = new URL('roland-kneubuehler.vcf', window.location.href).href;

  const encode = (value) => encodeURIComponent(value);
  const intentUrl = [
    'intent:#Intent',
    'action=android.intent.action.INSERT',
    'type=vnd.android.cursor.dir/contact',
    `S.name=${encode('Roland Kneubühler')}`,
    `S.phone=${encode('+41782461640')}`,
    `S.email=${encode('r.kneubuehler@outlook.com')}`,
    `S.company=${encode('Absaugtechnik Schweiz GmbH')}`,
    `S.job_title=${encode('E-Commerce & Digitalisierung')}`,
    `S.browser_fallback_url=${encode(fallbackUrl)}`,
    'end'
  ].join(';');

  document.querySelectorAll('a[href="roland-kneubuehler.vcf"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = intentUrl;
    });
  });
})();
