import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              eos quia similique consectetur ratione, error autem officia est
              eligendi sapiente eum deleniti ipsa excepturi quam aperiam qui hic
              tempore a doloribus est similique aut esse ipsam, maxime
              blanditiis ratione alias nobis magni corporis voluptatum ad
              reiciendis vero eligendi dicta tenetur optio? Officia cum quia
              aperiam, quam iusto libero fuga odit illum voluptatibus quidem
              iste nostrum.
            </p>

            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
