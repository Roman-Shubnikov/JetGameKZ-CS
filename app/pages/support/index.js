import { Button, Rating, Skeleton, TextField, InputBase } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Caption,
  FeedbackCell,
  Header,
  Header2,
  Paragraph,
  RLayout, SignBase
} from '../../components';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import { API_URL } from '../../config';
import { lang } from '../../providers';
import styles from './support.module.css';
import { getHumanyTime } from '../../src/utils'
import { styled, alpha } from '@mui/material/styles';
import React from 'react'

const Boxes = [
    {title: "ЧТО ДЕЛАТ, ЕСЛИ Я КУПИЛ ДОНАТ, А У МЕНЯ ОН НЕ ПОЯВИЛСЯ?", time: 1650818412, link: ""}, 
]

const Support = props => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '20ch',
            },
        },
    }));

    return (
        <div>
            <Paragraph
                head={<div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Header color={'var(--red)'}>
                        {lang.t('page_names.support')}
                    </Header>
                    <Caption mt={1.5} mb={4}>
                        {lang.t('page_names.support_descr')}
                    </Caption>
                </div>
                <Search sx={{display: { xs: 'none', sm: 'block' }, maxHeight: 40}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={lang.t('repeated.support_search')}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </Search></div>}
            >
                <Box className={styles['card-grid']}>
                    {Boxes.map((value, index) => (
                        <SignBase 
                            className={styles['card-grid_card']}
                        >
                            <Header2>{value.title}</Header2>
                            <Caption 
                                className='description'
                                sx={{mb: 2}}
                            >
                                {getHumanyTime(value.time).date}
                            </Caption>
                            <Button 
                                sx={{ width: '50%' }} 
                                size='large' 
                                variant='contained' 
                                href={value.link} 
                                target='_blank'
                            >
                                {lang.t('repeated.read')}
                            </Button>
                        </SignBase>
                    ))}
                </Box>
                <Button 
                    sx={{ width: '100%' }} 
                    size='large' 
                    variant='contained' 
                    target='_blank'
                >
                    {lang.t('repeated.next_page')}
                </Button>
          </Paragraph>
        </div>
    )
}

Support.Layout = RLayout;
export default Support;