/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function(){
    /**
     * @ngdoc config
     * @name ngTable
     * @description ngTable: Table + Angular JS config for jekyll
     */
    angular.module('ngTable').config(config);

	config.$inject = ['$interpolateProvider'];

	function config($interpolateProvider){
	  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	}
})();