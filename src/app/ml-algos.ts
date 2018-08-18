import { Algo } from './algo';

export const ALGOS: Algo[] = [
  { id: 1,
    name: 'Linear Regression',
    type: 'Prediction',
    function: 'LinearRegression',
    pkg: 'sklearn',
    subpkg: 'linear_model',
    param_names: ['fit_intercept', 'normalize', 'copy_X', 'n_jobs'],
    param_values: {
      fit_intercept: 'True',
      normalize: 'True',
      copy_X: 'True',
      n_jobs: 'True'
    },
    param_table: [
      {name: 'fit_intercept', value: 'True'},
      {name: 'normalize', value: 'True'},
      {name: 'copy_X', value: 'True'},
      {name: 'n_jobs', value: 'True'}
    ]
  },
  { id: 2,
    name: 'Random Forest',
    type: 'Classification',
    function: 'RandomForestClassifier',
    pkg: 'sklearn',
    subpkg: 'ensemble',
    param_names: ['n_estimators', 'criterion', 'max_features', 'max_depth', 'min_samples_split',
      'min_samples_leaf', 'min_weight_fraction_leaf', 'max_leaf_nodes', 'min_impurity_decrease',
      'bootstrap', 'oob_score', 'n_jobs', 'random_state', 'verbose', 'warm_start', 'class_weight'],
    param_values: {
      n_estimators: 10,
      criterion: 'gini',
      max_features: 'auto',
      max_depth: null,
      min_samples_split: 2,
      min_samples_leaf: 1,
      min_weight_fraction_leaf: 0,
      max_leaf_nodes: null,
      min_impurity_decrease: 0,
      bootstrap: 'True',
      oob_score: 'False',
      n_jobs: 1,
      random_state: null,
      verbose: 0,
      warm_start: 'False',
      class_weight: 'balanced'
    },
    param_table: [
      {name: 'n_estimators', value: 10},
      {name: 'criterion', value: 'gini'},
      {name: 'max_features', value: 'auto'},
      {name: 'max_depth', value: null},
      {name: 'min_samples_split', value: 2},
      {name: 'min_samples_leaf', value: 1},
      {name: 'min_weight_fraction_leaf', value: 0},
      {name: 'max_leaf_nodes', value: null},
      {name: 'min_impurity_decrease', value: 0},
      {name: 'bootstrap', value: 'True'},
      {name: 'oob_score', value: 'False'},
      {name: 'n_jobs', value: 1},
      {name: 'random_state', value: null},
      {name: 'verbose', value: 0},
      {name: 'warm_start', value: 'False'},
      {name: 'class_weight', value: 'balanced'},
    ]
  }
];
