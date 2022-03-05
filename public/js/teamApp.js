var doc, bod, htm;
addEventListener('load', function () {
    doc = document; bod = doc.body; htm = doc.documentElement;
    addEventListener('scroll', function () {
        doc.querySelector('#rectangle1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
        doc.querySelector('#triangle1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
        doc.querySelector('#rectangle2').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
        doc.querySelector('#ellipse1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
        doc.querySelector('#ellipse2').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
        doc.querySelector('#triangle3').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, #B621FE 0%, #1FD1F9 100%)' : 'linear-gradient(180deg, #22FAB0 0%, #1FD1F9 100%)';
    });
});