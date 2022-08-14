import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { getSortState } from 'react-jhipster';
import { ASC, DESC, ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { getEntities, reset } from 'app/entities/product/product.reducer';
import { RouteComponentProps } from 'react-router-dom';
import { CardGroup, Container } from 'reactstrap';
import ProductCard from 'app/marketplace/modules/product/productCard';

const HomePage = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );
  const [sorting, setSorting] = useState(false);

  const productList = useAppSelector(state => state.product.entities);
  const loading = useAppSelector(state => state.product.loading);
  const totalItems = useAppSelector(state => state.product.totalItems);
  const links = useAppSelector(state => state.product.links);
  const entity = useAppSelector(state => state.product.entity);
  const updateSuccess = useAppSelector(state => state.product.updateSuccess);
  const cardsPerCardGroup = 6;

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      })
    );
  };

  const resetAll = () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  useEffect(() => {
    resetAll();
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      resetAll();
    }
  }, [updateSuccess]);

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if ((window as any).pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1,
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting]);

  const sort = p => () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
    setSorting(true);
  };

  const handleSyncList = () => {
    resetAll();
  };

  const { match } = props;

  /*
  key={`${type}-${i}`}
  <span>
      <h3>Newest products</h3>
      <a>See More</a>
      </span>
   */

  return (
    <Container>
      This is the test page
      <h2>Test Page</h2>
      <h3>
        Newest products <a>See More</a>{' '}
      </h3>
      <CardGroup>
        {productList.map((product, i) => i < cardsPerCardGroup && <ProductCard key={`newest-${i}`} product={product} />)}
      </CardGroup>
    </Container>
  );
};

export default HomePage;
