import React from 'react'

export const TransactionList = () => {
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
            <li className="minus">
                Cash <span>$1000</span><button class="delete-btn">x</button>
            </li>
            <li className="minus">
                Flight <span>$300</span><button class="delete-btn">x</button>
            </li>
            <li className="minus">
                Hotel <span>$200</span><button class="delete-btn">x</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionList
