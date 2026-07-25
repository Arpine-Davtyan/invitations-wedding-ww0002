import { galleryImages } from "@/lib/contstants";
import Image from "next/image";

const GalleryItems = () => {
    return (
        <div className="grid grid-cols-3 max-size gap-4 mt-3">
            {galleryImages.map((image, index) => (
                <div
                    key={index}
                    className="relative aspect-[4/5] overflow-hidden"
                >
                    <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        width={500}
                        height={600}
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryItems;