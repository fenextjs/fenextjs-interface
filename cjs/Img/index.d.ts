/**
 * Properties for the base Img component.
 */
export interface ImgDataProps {
    /**
     * The ID of de Img.
     */
    id?: string | number;
    /**
     * The Name of de Img.
     */
    name?: string;
    /**
     * Url of Img.
     */
    src: string;
    /**
     * Url of Img for Size 1920px or up.
     */
    srcMin1920?: string;
    /**
     * Url of Img for Size 1680px or up.
     */
    srcMin1680?: string;
    /**
     * Url of Img for Size 1440px or up.
     */
    srcMin1440?: string;
    /**
     * Url of Img for Size 1024px or up.
     */
    srcMin1024?: string;
    /**
     * Url of Img for Size 992px or up.
     */
    srcMin992?: string;
    /**
     * Url of Img for Size 768px or up.
     */
    srcMin768?: string;
    /**
     * Url of Img for Size 575px or up.
     */
    srcMin575?: string;
    /**
     * Url of Img for Size 200x200px or up.
     */
    srcThumbnail_200?: string;
    /**
     * Url of Img for Size 100x100px or up.
     */
    srcThumbnail_100?: string;
}
