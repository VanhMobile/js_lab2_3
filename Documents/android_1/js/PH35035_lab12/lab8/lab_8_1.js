const getLocationInformation = (data) =>{
    const startTag = "<region>";
    const endTag = "</region>";
    const startIndex = data.indexOf(startTag);
    const endIndex = data.indexOf(endTag);
    return data.substring(startIndex + startTag.length, endIndex);
}


const whereAmI = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=xml&auth=148983814846264146112x106183`
    );

    if (!response.ok) {
      throw new Error("Failed to retrieve geolocation data");
    }

    const data = await response.text();
    console.log(`You are in ${getLocationInformation(data)}`);

  } catch (error) {
    console.error("Error:", error.message);
  }
};

whereAmI(51.50354, -0.12768);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);


let images = [];
let currentIndex = 0;

function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');
        image.src = imgPath;

        image.onload = () => {
            image.style.display = 'none';
            images.push(image);
            document.querySelector('.container').appendChild(image);
            resolve();
        };

        image.onerror = () => {
            reject(new Error('Failed to load image'));
        };
    });
}

function loadImageSequentially(imagePaths) {
    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function loadNextImage() {
        if (currentIndex < images.length) {
            setTimeout(() => {
                showImage(currentIndex);
                currentIndex++;
                loadNextImage();
            }, 2000);
        }
    }

    Promise.all(imagePaths.map(createImage))
        .then(() => {
            showImage(currentIndex);
            currentIndex++;
            loadNextImage();
        })
        .catch((error) => {
            console.log(error);
        });
}

const imagePaths = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'];
loadImageSequentially(imagePaths);


async function loadNPause(imgPath) {
    try {
        const image = await createImage(imgPath);
        await pause(2000);
        image.style.display = 'none';
        await pause(2000);
        image.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
}


async function loadAll(imgArr) {
    const imgs = await Promise.all(imgArr.map(createImage));
    console.log(imgs);

    const imageElements = await Promise.all(imgs.map(img => img.element));

    imageElements.forEach(element => {
        element.classList.add('paralell');
    });

}

loadNPause();

