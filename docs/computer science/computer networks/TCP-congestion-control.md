# TCP Congestion Control

End-to-end congestion control, sender perceives the congestion level and decides to increase or decrease the send rate

- How to change send rate?
- How to get the information about congestion level?
- What kind of algorithm is needed to calculate the changes we needed?

Sender tracks one variable called **congestion window**, which imposes a constraint on send rate. The unackownledged data cannot exceed congestion window (`cwnd`).

How to find there is a congestion: timeout or 3 duplicate ACKs received. If there is no congestion, just update `cwnd` each time one ACK is received (self-clocking).

How to decide send rates:

- Decrease send rate when a segment is lost.
- Increase send rate when an ACK is received.
- Increase send rate to probe an ideal send rate until one congestion occurs

TCP congestion-control algorithm:

- slow start
- congestion avoidance
- fast recovery

## Slow Start

- `cwnd` is typically 1 MSS at the beginning (with send rate MSS/RTT)
- for **each ACK**, increase `cwnd` by 1 MSS
- for example, sender first send 1 segment with 1 MSS, after receive the ACK, increase `cwnd` to 1+1 MSS, as the `cwnd` is now 2 MSS, we send 2 segments with 1 MSS, then get the two ACKs and increase to 2+1+1 MSS, then send 4 segments... thus in slow start phrase the send rate grows exponentially
- when should this exponential growth end?
  - if timeout, set `cwnd` to 1 and begin a new slow start process, set slow start threshold (`ssthresh`) to half of original `cwnd`
  - if `cwnd` equals `ssthresh`, start congestion avoidance
  - if three duplicate ACKs are detected, performs a fast retransmit nd enters the fast recovery state

## Congestion Avoidance

- linear increase of `cwnd`: increases the value of `cwnd` by just a single MSS **every RTT**
- for example, if MSS = x bytes and `cwnd` is y bytes, we will send y/x segments within one RTT, we could increase `cwnd` by x/(y/x) = x^2/y bytes so that the total increased value is x bytes.
- when should we stop this linear growth?
  - if timeout, set `cwnd` to 1 MSS and set `ssthresh` to the half of original `cwnd`
  - if three duplicate ACKs are detected, halve `cwnd` and add 3 MSS, also set `ssthresh` to the half of original `cwnd` and enter fast recovery

## Fast Recovery

- increase `cwnd` by 1 MSS for every duplicate ACK received for the missing segment that cased TCP to enter fast recovery
- if ACK arrives for the missing segment, enter congestion avoidance after deflating `cwnd`
- if timeout, transit to slow start after the same thing in the two other states: set `cwnd` to 1 MSS and set `ssthresh` to the half of original `cwnd`
- TCP tahoe cuts `cwnd` to 1 MSS and enter slow start after congestions occurs, TCP Reno incorporates fast recovery
