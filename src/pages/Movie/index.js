import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryMovie } from '../../apis/movieApi';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Title from './Title';
import Info from './Info';
import Image from '../../components/Image';

const Movie = () => {
  const { id } = useParams();
  // fetch data
  const { data, isLoading, isError, error } = useQueryMovie({ id });
  // show error if request is failed
  if (isError) return <Error show={true} errorMessage={error.message} />;
  // show loading at initial access or loading data
  if (isLoading || !data)
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  // show page with data
  return (
    <>
      <section className="py-4 pb-1">
        <Title movie={data} />
      </section>
      <div className="row g-0">
        <div className="col-md-7 col-12">
          <Image src={data.Poster} />
        </div>
        <div className="col-md-5 col-12 p-4 p-lg-5 text-bg-dark">
          <Info movie={data} />
        </div>
      </div>
    </>
  );
};
export default Movie;
