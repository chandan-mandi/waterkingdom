import React from 'react';
import { Container } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Fade } from 'react-reveal';
import "./ImgGallery.css";

const ImgGallery = () => {
    const IMAGES =
        [
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/little-child-enjoying-her-time-in-a-hot-tub-.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/little-child-enjoying-her-time-in-a-hot-tub-.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-on-a-rubber-boat-in-the-water-park-ride-down-the-water-slide.jpg",
                thumbnail: "https://i.ibb.co/WyqdTcz/24.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-in-the-water-park.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-in-the-water-park.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park-1-e1628495592253.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park-1-e1628495592253.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/portrait-of-a-gorgeous-girl-in-a-black-swimsuit-on-the-stairs-of-a-pool-in-the-water-park-.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/portrait-of-a-gorgeous-girl-in-a-black-swimsuit-on-the-stairs-of-a-pool-in-the-water-park-.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: "https://i.ibb.co/Wy06N9n/aquatica-25.jpg",
                thumbnail: "https://i.ibb.co/Wy06N9n/aquatica-25.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/fun-in-the-pool-and-water-park.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/little-child-enjoying-her-time-in-a-hot-tub-.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/little-child-enjoying-her-time-in-a-hot-tub-.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-on-a-rubber-boat-in-the-water-park-ride-down-the-water-slide.jpg",
                thumbnail: "https://i.ibb.co/v1wgH4p/aquatica-23.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-in-the-water-park.jpg",
                thumbnail: "https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/children-in-the-water-park.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            }
        ]
    function myTileViewportStyleFn() {
        if (this.props.item.isSelected) {
            // something stylish...
            // isSelected: true
        };
    }

    return (
        <div className="img-gallery">
            <Container className="py-5">
                <div className="header-text py-3">
                    <Fade left duration={2000} distance="40px">
                        <h6>Our Gallery</h6>
                    </Fade>
                    <Fade right duration={2000} distance="40px">
                    <h2>CAPTURED MOMENTS IN AQUATICA</h2>
                    </Fade>
                    <p className='text-secondary w-100'>This is a very popular and famous Water Theme Park & Resorts.This is the major entertrainment place to visit, relax and enjoy a lot.</p>
                </div>
                <div className='py-3' style={{
                    display: "block",
                    width: "100%",
                    margin: "auto",
                    overflow: "auto"
                }}>
                    <Fade bottom duration={1000} distance="40px">
                    <Gallery fluid images={IMAGES} enableImageSelection={false} tileViewportStyle={myTileViewportStyleFn} />
                    </Fade>
                </div>

            </Container>
        </div>
    );
};

export default ImgGallery;