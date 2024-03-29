import type {NextPage} from 'next'
import Head from 'next/head'
import {Paper, Container, Box} from "@mui/material";
import InputBase from '@mui/material/InputBase';

import {flexbox} from '@mui/system';

import {styled} from "@mui/system";

const height = '100%';

const SearchPaper = styled(Paper)`
  padding: 10px;
`;

const SearchBox = styled(Box)`
  height: ${height};
`;

const SearchContainer = styled(Container)`
  height: ${height};
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <SearchContainer maxWidth='sm'>
        <SearchBox sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <SearchPaper elevation={2}>
            <InputBase
              sx={{ ml: 1, flex: 1, width: '100%' }}
              placeholder="What's your property address?"
              inputProps={{ 'aria-label': 'sWhat\'s your property address' }}
            />
          </SearchPaper>
        </SearchBox>
      </SearchContainer>


    </div>
  )
}

export default Home
