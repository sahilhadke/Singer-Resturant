import React, { Component } from 'react'
import "./css/card.css"

class card extends Component {
    render() {
        return (
            <div>
                <section class="search-result-item">
                                <a class="image-link" href="#"><img class="image" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                </a>
                                <div class="search-result-item-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h4 class="search-result-item-heading"><a href="#">john doe</a></h4>
                                            <p class="info">New York, NY 20188</p>
                                            <p class="description">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                                        </div>
                                        <div class="col-sm-3 text-align-center">
                                            <p class="value3 mt-sm">Rs. 500</p>
                                            <p class="fs-mini text-muted">PER HOUR</p><a class="btn btn-primary btn-info btn-sm" href="#">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
            </div>
        )
    }
}

export default card
