import styles from './companyadminpanel.module.css'
import CompanyAdminBlock from '../CompanyAdminBlock/CompanyAdminBlock';
import getAllCompanies from '@/app/libs/getAllCompanies';

export default async function(){
    
    
    const allCompanies = await getAllCompanies()

      return(
        <div className={styles.fullPage}>
            <div className={styles.fullOutline}>
            <div className={styles.fullBlock}>
                {allCompanies.data.map((company : any) => (
                    
                    <CompanyAdminBlock key={company.id} compName={company.name}
                        website={company.website}
                        tel={company.tel}
                        email={company.contact_email}
                        desc={company.description}
                        img={company.imageurl}
                        timeslot={company.timeslot}
                    />
                ))}
            </div>
            </div>
            
        </div>
      )
}