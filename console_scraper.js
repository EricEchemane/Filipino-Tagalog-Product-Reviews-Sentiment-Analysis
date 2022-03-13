const reviewTexts = Array.from(document.querySelectorAll('#module_product_review > div > div > div:nth-child(3) > div.mod-reviews > div > div.item-content > div.content')).map(r => r.innerText);

const selector = '#module_product_review > div > div > div:nth-child(3) > div.mod-reviews > div > div.top > div';
const starContainers = Array.from(document.querySelectorAll(selector));
const ratings = [];

const startLinkImg = 'https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png';
starContainers.forEach(cont => {
    const stars = Array.from(cont.getElementsByTagName('img')).filter(img => img.src == startLinkImg).length;
    ratings.push(stars);
});

let text = '';

for (let i = 0; i < reviewTexts.length; i++) {
    const data = { review: reviewTexts[i], rating: ratings[i] };
    text += JSON.stringify(data) + '\n';
}

const elem = document.createElement('textarea');
elem.value = text;
document.body.appendChild(elem);
elem.select();
document.execCommand('copy');
document.body.removeChild(elem);