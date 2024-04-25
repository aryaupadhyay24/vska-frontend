import React from 'react'
import { feature } from "../../dummydata"
import ProfileCard from './ProfileCard'
import Heading from "../common/heading/Heading"

function Profile() {
  return (
    
    <div class="container" style={{marginTop:"8vh",}} >
      <Heading subtitle='PROFILES IN DATA SCIENCE ' title="" />
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <ProfileCard value="10.4 LPA" title="Data Scientist" desc="Data scientists are often considered the core professionals in the field. They collect, clean, analyze, and interpret data to derive valuable insights. They are skilled in programming,statistics, and data visualization. "  cover="https://vskaworld.com/wp-content/uploads/2023/09/data-scientist-1-300x300.png" />
        </div>
        <div class="col">
        <ProfileCard  value="7.8 LPA" title="Data Analyst" desc="Data analysts focus on gathering and processing data to generate reports, dashboards, and visualizations. They often work with structured data and are proficient in tools like Excel, SQL, and data visualization tools. "  cover="https://vskaworld.com/wp-content/uploads/2023/09/presentation.png"/>
        </div>
      </div>
      <div class="row"  style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
        <ProfileCard value="20 LPA" title="Machine Learning Engineer" desc="Machine learning engineers specialize in developing and implementing machine learning models and algorithms. They work closely with data scientists to put models into production and ensure they perform efficiently. " cover="https://vskaworld.com/wp-content/uploads/2023/09/coding.png" />
        </div>
        <div class="col">
        <ProfileCard value="9.4 LPA" title="Big Data Engineer" desc="Big data engineers are responsible for managing and processing large volumes of data using technologies like Hadoop, Spark, and NoSQL databases. They design and maintain data pipelines and infrastructure. " cover="https://vskaworld.com/wp-content/uploads/2023/09/data-analytics.png" />
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <ProfileCard value="14 LPA" title="Business Intelligence (BI) Analyst" desc="BI analysts focus on using data to make strategic business decisions. They create and maintain BI dashboards, reports, and analytics tools to help organizations understand their data better. "  cover="https://vskaworld.com/wp-content/uploads/2023/09/business-intelligence-300x300.png"/>
        </div>
        <div class="col">
        <ProfileCard value="9.5 LPA" title="Data Engineer" desc="Data engineers are responsible for collecting, storing, and managing data from various sources. They design and maintain data warehouses and ETL (Extract, Transform, Load) pipelines."  cover="https://vskaworld.com/wp-content/uploads/2023/09/configuration.png"/>
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <ProfileCard value="25.4 LPA" title="Data Architect" desc="Data Architect: Data architects design the overall data strategy and architecture for an organization. They ensure data is stored, accessed, and used effectively while maintaining data integrity and security."  cover="https://vskaworld.com/wp-content/uploads/2023/09/hierarchical-structure-300x300.png"/>
        </div>
        <div class="col">
        <ProfileCard value="11.2 LPA" title="Statistician" desc="Statisticians are experts in statistical analysis and hypothesis testing. They play a crucial role in designing experiments, conducting statistical research, and providing insights based on data."  cover="https://vskaworld.com/wp-content/uploads/2023/09/monitoring.png"/>
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <ProfileCard value="16 LPA" title="Quantitative Analyst (Quant)" desc="Quants apply mathematical and statistical models to financial and risk management problems. They work in finance, investment, and trading sectors to make data-driven decisions. "  cover="https://vskaworld.com/wp-content/uploads/2023/09/quantitative-300x300.png"/>
        </div>
        <div class="col">
        <ProfileCard value="21.4 LPA" title="AI Research Scientist" desc="AI research scientists are involved in cutting-edge research in artificial intelligence, developing new algorithms, and pushing the boundaries of AI capabilities." cover="https://vskaworld.com/wp-content/uploads/2023/09/ai.png" />
        </div>
      </div>
    </div>
  )
}

export default Profile
