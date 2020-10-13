import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import searchActions from '../../../redux/search/actions';
import CompanySearchImg from '../../../assets/images/companySearch.png';
import * as Styled from './SearchCompany.style';

const SearchCompany = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, error, company } = useSelector((state) => state.Search);
  console.log('COMPANY - ', company?.[0], searchQuery);

  const onHandleSearch = useCallback(() => {
    dispatch(searchActions.searchCompanyRequest(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <Styled.Container>
      <Styled.Body>
        <Styled.NavBar>
          <Styled.NavBarText>Your Company Name</Styled.NavBarText>
        </Styled.NavBar>
        <Styled.SearchLabel>
          Search for your company's name or number
        </Styled.SearchLabel>
        <Styled.TextInputWrapper>
          <Styled.TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Styled.SearchButton onPress={onHandleSearch}>
            <Icon name="search" size={24} color="#fff" />
          </Styled.SearchButton>
        </Styled.TextInputWrapper>
        <Styled.Divider />
        {loading || company?.length === 0 ? (
          <Styled.NoCompanyWrapper>
            <Styled.CompanyImage source={CompanySearchImg} />
            <Styled.Title>Search for your company's name above</Styled.Title>
            <Styled.Subtitle>
              Once you've got your company's score,{'\n'}you can search for
              others later
            </Styled.Subtitle>
          </Styled.NoCompanyWrapper>
        ) : null}
        {!loading && company?.length ? (
          <Styled.CompanyResult>
            <Styled.Title>Your Results</Styled.Title>
            <Styled.Subheading>
              Select a result below to proceed to the next step
            </Styled.Subheading>
            <Styled.ResultWrapper>
              {company?.slice(1, 4).map((item) => (
                <Styled.CompanyItem key={item.companyNumber}>
                  <Styled.CompanyInfo>
                    <Styled.CompanyName numberOfLines={1}>
                      {item.title}
                    </Styled.CompanyName>
                    <Styled.CompanyRegNo>{`Reg No: ${item.companyNumber}`}</Styled.CompanyRegNo>
                  </Styled.CompanyInfo>
                  <Button type="outline" isRound size="md">
                    Select
                  </Button>
                </Styled.CompanyItem>
              ))}
            </Styled.ResultWrapper>
          </Styled.CompanyResult>
        ) : null}
      </Styled.Body>
      <Styled.ButtonWrapper>
        <Button type="primary" isRound onPress={onHandleSearch}>
          Search <Icon name="search" size={16} color="#fff" />
        </Button>
        <Button type="secondary">Log In</Button>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default SearchCompany;
