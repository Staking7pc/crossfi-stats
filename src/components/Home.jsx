import React from "react";
import "./Home.css";
export default function Cards() {
  return (
    <body>
      <div class="container">
        <div class="heading">
          <h4>Crossfi tools by <a href="https://brightlystake.com/">Brightlystake</a></h4>
        </div>
        
        <div class="row">
          <div class="card">
            <div class="card-header">
              <h3>RPC STATUS</h3>
            </div>
            <div class="card-body">
              <p>Check the status of relayers in crossfi</p>
              <a target="_blank" rel="noopener noreferrer" href="/rpc-status" class="btn">
                Click here
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3>SNAPSHOT</h3>
            </div>
            <div class="card-body">
              <p>Download the snapshot for crossfi testnet</p>
              <a target="_blank" rel="noopener noreferrer" href="https://snapshot.brightlystake.com/crossfi/" class="btn">
                Click here
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3>DOCS</h3>
            </div>
            <div class="card-body">
              <p>How to guides</p>
              <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@staking7pc/how-to-guide-crossfi-0ec4c28e34c3" class="btn">
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
