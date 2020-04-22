# Epidemiology

## Basic Definitions

**attack rate**: the % of people who get sick after exposing to something

**relative risk**: the % who become ill in one group divided by the % who become ill in another group, i.e. the ratio of two attack rates

**case & control** 实验组与对照组？

**incidence & prevalence**: Thinking about a tank of prevalent cases, then the incident cases shoud come in while dealth or recovery should come out.

**prevalence**: number with the disease/population size

prevalence depends on incidence rate and duration: 

$P/(1-P) \approx IR \times D$

**incidence**: number of new cases/population size at risk

**case-fatality ratio(CFR)**: the percent of people with the condition who die in a time period (death/cases)

**age-adjusted death rate**:

$\sum_{\text{age group}} age \% \times \text{CFR by age}$

## life expectation

$(\sum_{eachAgeGroup} death \times midpoint)/total$

Sometimes there is no midpoint and we will use the upper bound of each age group.

**disability-adjusted life year(DALY):** the day you could live times your life quality (from 0 to 1)

When there will be multi-possible outcomes, use:

$\sum \text{the day you could live} \times quality \times possibility$

**potential years of life lost(PYLL):** 

$\sum_{eachAgeGroup}  \times CFR \times lifeExpectation \times confirmedCase\%$

##Modeling

R0 - the number of people that one person could spread to

We could reduce R0 by:

- vaccinating and reduce the number of people who are susceptible
- quaranting, to reduce transmission (or culling animals)

### SIR  Model

- susceptible
- infected
- Recovered or removed

S + I + R = 1

Given transmission rate \(\beta\) and recovery rate \(\gamma\):

$\delta S(t)/\delta t = -\beta S(t)I(t)$

$\delta R/ \delta t = \gamma I$

$\delta I / \delta t = \beta SI - \gamma I$

$R_0 = \beta / \gamma$

### SEIR Model

- susceptible
- **exposed**
- infected
- recovered

Or, you have to add births, deaths, migration or carriers of a disease.

After adding death parameter \(\mu\) =birth parameter \(\nu\), where \(\rho\) is the death possibility of the disease:

$\delta S(t)/\delta t = \nu -\beta S(t)I(t) - \mu S$

$\delta R/ \delta t = (1-r)\gamma I - \mu R$

$\delta I / \delta t = \beta SI - (\gamma+\mu)/(1-r) I$

$R_0 = \beta(1- \rho)\nu/(\mu + \gamma)\mu$

To stop an epidemic, we need R0<1.

$S< \gamma \beta$

- make S small by vaccinating
- make \(\beta\) small by washing hands or social distancing
- make\(\gamma\) large by quarantine(shorten\(1/\gamma\))

## Vaccination

**herd immunity**: we only need to vaccinate a portion of people to eradicate an infection, the portion is:

$p_c = 1-1/R_0$

## periods

**incubation period**: the time between infection and onset of clinical disease/symptoms

**latent period**: time between infection and becoming infectious

