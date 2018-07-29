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
    }
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
    }
  },
  { id: 3, 
    name: 'K Nearest Neighbors',
    type: 'Classification',
    function: 'KNeighborsClassifier',
    pkg: 'sklearn',
    subpkg: 'neighbors',
    param_names: [],
    param_values: {
    }
  }
];