import React, { Component } from 'react'
import $ from 'jquery'

class Banner extends Component {
    render() {
        return (
            <div className="banner" >
            </div>
        );
    }

    componentDidMount(){
        var embedCode = '<!-- Begin BidVertiser code --><SCRIPT SRC="http://bdv.bidvertiser.com/BidVertiser.dbm?pid=754816&bid=1859215" TYPE="text/javascript"></SCRIPT><!-- End BidVertiser code -->';
        //$('.banner').append(embedCode);
    }
}

export default Banner