import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../../assets/styles/Lib';
import Header from '../../features/Header/Header';
import CountryList from '../../features/CountryList/CountryList';

const Home = props => {
  const { countries } = props;
  return (
    <>
      <Header />
      <Container>
        <CountryList countries={countries} />
      </Container>
    </>
  );
};

const mapStateToProps = store => ({
  countries: store.setCountriesReducer.countries
});

export default connect(mapStateToProps)(Home);
