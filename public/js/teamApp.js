var doc, bod, htm;
addEventListener('load', function () {
    doc = document; bod = doc.body; htm = doc.documentElement;
    addEventListener('scroll', function () {
        doc.querySelector('#rectangle1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg,rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
        doc.querySelector('#triangle1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
        doc.querySelector('#rectangle2').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
        doc.querySelector('#ellipse1').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
        doc.querySelector('#ellipse2').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
        doc.querySelector('#triangle3').style.background = htm.scrollTop > 699 && htm.scrollTop < 1299 ? 'linear-gradient(180deg, rgba(182, 33, 254, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)' : 'linear-gradient(180deg, rgba(34, 250, 176, 0.65) 0%, rgba(31, 209, 249, 0.65) 100%)';
    });
});