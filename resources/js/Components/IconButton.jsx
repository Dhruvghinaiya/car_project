import React from 'react';

const IconButton = ({ icon: Icon, text, iconSize = '24', textSize = 'text-lg', bgColor = '#F3F5F8', hoverColor = '#F3F5F8', link = '#' }) => {
    return (
        <div 
            className={`flex items-center gap-x-2 ml-7 hover:bg-[${hoverColor}] p-2 w-52`}
            style={{ backgroundColor: bgColor }}
        >
            <Icon className={`text-${iconSize}`} />
            <a href={link} className={`text-${textSize}`}>{text}</a>
        </div>
    );
};

export default IconButton;
