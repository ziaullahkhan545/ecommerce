import React from 'react';
import DirectoryItem from '../directory-item/directory-item';
import './directory-list.css';
import selectDirectorySections from '../../redux/directory/directory-selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function DirectoryList({sections}) {
    return (
        <div className='container-fluid'>
            <div className='container center'>
                <div className='directory-list pt-5'>
                    {
                        sections.map(({ id, ...oldPropsData }) => {
                            return <DirectoryItem key={id} {...oldPropsData} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
})

export default connect(mapStateToProps)(DirectoryList);