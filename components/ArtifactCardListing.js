export default function ArtifactCardListing() {
  return (
    <figure>
      <div className="listing">
        <style jsx>
          {`
            .listing {
              color: rgb(212, 212, 212);
              background-color: rgb(30, 30, 30);
              font-family: Consolas, "Courier New", monospace;
              font-size: 14px;
              line-height: 19px;
              white-space: pre;
              padding: 10px;
            }
            .purple {
              color: #c586c0;
            }
            .light-blue {
              color: #9cdcfe;
            }
            .brown-red {
              color: #ce9178;
            }
            .blue {
              color: #569cd6;
            }
            .medium-blue {
              color: #4fc1ff;
            }
            .yellow {
              color: #dcdcaa;
            }
            .gray {
              color: #808080;
            }
            .mint-green {
              color: #4ec9b0;
            }
          `}
        </style>

        <div>
          <span className="purple">import</span> {"{"}{" "}
          <span className="light-blue">convertRoleNameToPageName</span> {"}"}{" "}
          <span className="purple">from</span>{" "}
          <span className="brown-red">"./RoleCard"</span>;
        </div>
        <br />
        <div>
          <span className="purple">export</span>{" "}
          <span className="purple">default</span>{" "}
          <span className="blue">function</span>{" "}
          <span className="yellow">ArtifactCard</span>(
          <span className="light-blue">props</span>) {"{"}
        </div>
        <div>
          &nbsp; <span className="blue">const</span>{" "}
          <span className="medium-blue">linkHref</span> =
        </div>
        <div>
          &nbsp; &nbsp; <span className="light-blue">props</span>.
          <span className="light-blue">id</span> &amp;&amp;{" "}
          <span className="light-blue">props</span>.
          <span className="light-blue">parent</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; ?{" "}
          <span className="yellow">convertRoleNameToPageName</span>(
          <span className="light-blue">props</span>.
          <span className="light-blue">parent</span>) +{" "}
          <span className="brown-red">"/"</span> +{" "}
          <span className="light-blue">props</span>.
          <span className="light-blue">id</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; : <span className="brown-red">"#"</span>;
        </div>
        <br />
        <div>
          &nbsp; <span className="purple">return</span> (
        </div>
        <div>
          &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">figure</span>{" "}
          <span className="light-blue">className</span>=
          <span className="blue">{"{"}</span>
          <span className="brown-red">"artifact-card "</span> +{" "}
          <span className="light-blue">props</span>.
          <span className="light-blue">id</span>
          <span className="blue">{"}"}</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">a</span>{" "}
          <span className="light-blue">href</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">linkHref</span>
          <span className="blue">{"}"}</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">img</span>{" "}
          <span className="light-blue">src</span>=
          <span className="blue">{"{"}</span>
          <span className="light-blue">props</span>.
          <span className="light-blue">thumbnail</span>
          <span className="blue">{"}"}</span>{" "}
          <span className="gray">/&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;/</span>
          <span className="blue">a</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">figcaption</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">h1</span>
          <span className="gray">&gt;</span>
          <span className="blue">{"{"}</span>
          <span className="light-blue">props</span>.
          <span className="light-blue">artifactTitle</span>
          <span className="blue">{"}"}</span>
          <span className="gray">&lt;/</span>
          <span className="blue">h1</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">p</span>
          <span className="gray">&gt;</span>
          <span className="blue">{"{"}</span>
          <span className="light-blue">props</span>.
          <span className="light-blue">hook</span>
          <span className="blue">{"}"}</span>
          <span className="gray">&lt;/</span>
          <span className="blue">p</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;/</span>
          <span className="blue">figcaption</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="blue">a</span>{" "}
          <span className="light-blue">href</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">linkHref</span>
          <span className="blue">{"}"}</span>{" "}
          <span className="light-blue">className</span>=
          <span className="brown-red">"see-more-button"</span>
          <span className="gray">&gt;</span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; See more...</div>
        <div>
          &nbsp; &nbsp; &nbsp; <span className="gray">&lt;/</span>
          <span className="blue">a</span>
          <span className="gray">&gt;</span>
        </div>
        {/* <div>
        &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
        <span className="blue">style</span>{" "}
        <span className="light-blue">jsx</span>
        <span className="gray">&gt;</span>
        <span className="blue">{"{"}</span>
        <span className="brown-red">`</span>
      </div>
      <div>
        <span className="brown-red">
          &nbsp; &nbsp; &nbsp; &nbsp; figure {"{"}
        </span>
      </div>
      <div>
        <span className="brown-red">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; text-align: center;
        </span>
      </div>
      <div>
        <span className="brown-red">&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</span>
      </div>
      <div>
        <span className="brown-red">&nbsp; &nbsp; &nbsp; &nbsp; h1 {"{"}</span>
      </div>
      <div>
        <span className="brown-red">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; margin: 0;
        </span>
      </div>
      <div>
        <span className="brown-red">&nbsp; &nbsp; &nbsp; &nbsp; {"}"}</span>
      </div>
      <div>
        <span className="brown-red">&nbsp; &nbsp; &nbsp; `</span>
        <span className="blue">{"}"}</span>
        <span className="gray">&lt;/</span>
        <span className="blue">style</span>
        <span className="gray">&gt;</span>
      </div> */}
        <div>
          &nbsp; &nbsp; <span className="gray">&lt;/</span>
          <span className="blue">figure</span>
          <span className="gray">&gt;</span>
        </div>
        <div>&nbsp; );</div>
        <div>{"}"}</div>
      </div>
      <figcaption>
        The reusable code that defined each artifact card.
      </figcaption>
    </figure>
  );
}
