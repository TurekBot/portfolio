export default function ArtifactCardUse() {
  return (
    <figure>
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

      <div className="listing">
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="mint-green">ArtifactCard</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">parent</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">roleName</span>
          <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">id</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">knucklesId</span>
          <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">thumbnail</span>=
          <span className="brown-red">"/images/undraw_scrum_board.svg"</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">artifactTitle</span>=
          <span className="brown-red">
            "Agile Team: Knuckle's Dojo Scheduler"
          </span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">hook</span>=
          <span className="blue">{"{"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="gray">&lt;</span>
          <span className="blue">span</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; It's all about
          delivering early and often—and listening to your
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; customers!</div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="gray">&lt;/</span>
          <span className="blue">span</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">/&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">&lt;</span>
          <span className="mint-green">ArtifactCard</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">parent</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">roleName</span>
          <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">id</span>=
          <span className="blue">{"{"}</span>
          <span className="medium-blue">autoDashId</span>
          <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">thumbnail</span>=
          <span className="brown-red">"/images/AutoDash.gif"</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">artifactTitle</span>=
          <span className="brown-red">"AutoDash"</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="light-blue">hook</span>=
          <span className="blue">{"{"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="gray">&lt;</span>
          <span className="blue">span</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em dashes should be
          easy to type—but they’re not. AutoDash fixes
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; that.</div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <span className="gray">&lt;/</span>
          <span className="blue">span</span>
          <span className="gray">&gt;</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="blue">{"}"}</span>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; <span className="gray">/&gt;</span>
        </div>
      </div>
      <figcaption>
        An example of reusing the <code>&lt;ArtifactCard/&gt;</code> component.
        Each one is given a <code>thumbnail</code>, <code>artifactTitle</code>,
        and <code>hook</code>.
      </figcaption>
    </figure>
  );
}
