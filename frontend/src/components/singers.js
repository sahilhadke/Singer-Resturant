// https://www.bootdey.com/snippets/view/Search-users-page-result
import React, { Component } from 'react'
import "./css/singers.css"
import Card from "./card"
class singers extends Component {
    render() {
        return (
            <div>
                <div class="container singer-container">
	                <div class="row">
                          <div class="col-md-12">
                            <div class="input-group" id="adv-search">
                                <input type="text" class="form-control" placeholder="Search for Singers" />
                                <div class="input-group-btn">
                                    <div class="btn-group" role="group">
                                        <div class="dropdown dropdown-lg">
                                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
                                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                                <form class="form-horizontal" role="form">
                                                    <div class="form-group">
                                                        <label for="filter">Filter by</label>
                                                        <select class="form-control">
                                                            <option value="0" selected>Most Relevant</option>
                                                            <option value="3">Top Rated</option>
                                                            <option value="3">Most Viewed</option>
                                                        </select>
                                                    </div>
                                            
                                                    <div class="form-group">
                                                        <label for="filter">Gender</label>
                                                        <select class="form-control">
                                                            <option value="0" selected>Any</option>
                                                            <option value="3">Male</option>
                                                            <option value="3">Female</option>
                                                        </select>
                                                    </div>
                                           
                                                    <div class="form-group">
                                                        <label for="contain">City</label>
                                                        <input class="form-control" type="text" placeholder="Filter by City"/>
                                                    </div>
                                           
                                                    <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                                </form>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	            </div>
            
                <div class="container">
                    <div class="row ng-scope">
                        <div class="col-md-3 col-md-push-9">
                           
                            
                        </div>
                        <div class="col-md-9 col-md-pull-3">
                            <p class="search-results-count">Search Results</p>
                            
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default singers
