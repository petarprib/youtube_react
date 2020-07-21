import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class LikedVideosItem extends Component {
    render() {
        let { video } = this.props;

        return (
            <div>
                <p>{video.title}</p>
                <Image src={video.thumbnailMedium} />
            </div>
        );
    }
}