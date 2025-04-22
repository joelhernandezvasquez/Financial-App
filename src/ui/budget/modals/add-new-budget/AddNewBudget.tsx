
import { useState } from 'react';
import MutedText from '@/ui/muted-text/MutedText';
import { budgetCategory} from '@/lib/constants';
import FormDropdown from '@/ui/form-dropdown/FormDropdown';
import ThemeDropdown from '@/ui/theme-dropdown/ThemeDropdown';
import form from '../../../../app/form.module.css';
import { useThemeColors } from '../../context/ThemeColorsContext';
import { getAvailableThemeColor } from '@/lib/utils';

const AddNewBudget = () => { 
 const { processedThemeColors } = useThemeColors();
 const [selectedCategory,setSelectCategory] = useState(budgetCategory[0]);
 const [selectedThemeColor,setThemeColor] = useState(getAvailableThemeColor(processedThemeColors));
  
//  TODO: make responsive and pointer cursor for dropdown and items
 return (
      <>
       <MutedText 
       text={'Choose a category to set a spending budget. These categories can help you monitor spending.'}       
       size='sm'
       />
       <form className={form.form}>
         <div className={form.field}>
           <label htmlFor='budget-category'>Budget Category</label>
            <FormDropdown 
             dropdownItems={budgetCategory} 
             currentItemSelected={selectedCategory} 
              callback={setSelectCategory}           
            />
         </div>

         <div className={form.field}>
           <label htmlFor='budget-spending'>Maximun Spending</label>
           <input className={form.input} 
            id="budget-spending" 
            placeholder='$ e.g.2000'
            />
         </div>

         <div className={form.field}>
           <label htmlFor='budget-theme'>Color Tag</label>
           <ThemeDropdown
             dropdownItems={processedThemeColors} 
             currentItemSelected={selectedThemeColor!} 
              callback={setThemeColor}           
            />
         </div>
        <button className={form.submit_btn}>Add Budget</button>
      </form> 

      </>
  )
}

export default AddNewBudget