import Link from "next/link";

import styles from "./TextLink.module.sass";
import classNames from "classnames";

interface ITextLink {
    text: string;
    size: number;
    link: string;
}

const TextLink: React.FC<ITextLink> = ({ text, size, link }) => {
    console.log(link)
    return (
        <>
            <Link
                href={link}
                className={classNames(
                    styles.link,
                    {
                        [styles[`link${size}`]]: size > 0,
                    },
                )}
                replace
            >
                {text}
            </Link>
        </>
    );
};

export default TextLink;
