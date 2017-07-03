import React from "react";
import "./complex.css";
export default () => {
  return (
    <section className="complex-features">
      <h2 className="complex-heading complex-feature-heading">
        Характеристики
      </h2>
      <div className="row">
        <div className="col-xs-4">
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">Статус:</dt>
            <dd className="complex-feature-value">Квартиры</dd>
            <dt className="complex-feature-type">Цены:</dt>
            <dd className="complex-feature-value">
              от 5.3 до 143.5 млн
            </dd>
          </dl>
        </div>
        <div className="col-xs-4">
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
          </dl>
        </div>
        <div className="col-xs-4">
          <dl className="complex-feature-list">
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
            <dt className="complex-feature-type">
              Количество квартир:
            </dt>
            <dd className="complex-feature-value">1 503</dd>
          </dl>
        </div>
      </div>
      <div className="row" />
    </section>
  );
};