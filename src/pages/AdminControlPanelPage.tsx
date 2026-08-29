import React from 'react';

export interface AdminControlPanelPageProps {
  title?: string;
  onAction?: () => void;
}

export const AdminControlPanelPageView: React.FC<AdminControlPanelPageProps> = ({ title = 'AdminControlPanelPage Management View' }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
      <h2 className="text-lg font-bold text-slate-100">{title}</h2>
      <p className="text-xs text-slate-400">Active enterprise domain view: AdminControlPanelPage</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 1</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 1</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 1.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 2</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 2</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 2.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 3</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 3</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 3.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 4</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 4</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 4.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 5</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 5</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 5.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 6</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 6</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 6.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 7</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 7</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 7.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 8</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 8</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 8.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 9</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 9</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 9.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 10</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 10</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 10.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 11</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 11</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 11.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 12</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 12</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 12.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 13</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 13</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 13.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 14</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 14</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 14.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 15</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 15</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 15.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 16</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 16</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 16.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 17</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 17</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 17.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 18</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 18</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 18.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 19</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 19</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 19.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 20</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 20</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 20.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 21</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 21</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 21.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 22</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 22</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 22.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 23</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 23</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 23.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 24</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 24</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 24.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 25</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 25</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 25.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 26</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 26</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 26.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 27</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 27</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 27.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 28</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 28</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 28.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 29</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 29</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 29.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 30</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 30</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 30.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 31</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 31</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 31.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 32</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 32</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 32.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 33</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 33</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 33.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 34</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 34</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 34.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 35</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 35</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 35.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 36</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 36</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 36.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 37</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 37</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 37.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 38</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 38</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 38.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 39</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 39</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 39.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 40</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 40</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 40.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 41</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 41</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 41.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 42</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 42</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 42.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 43</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 43</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 43.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 44</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 44</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 44.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 45</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 45</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 45.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 46</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 46</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 46.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 47</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 47</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 47.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 48</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 48</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 48.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 49</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 49</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 49.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 50</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 50</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 50.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 51</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 51</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 51.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 52</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 52</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 52.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 53</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 53</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 53.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 54</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 54</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 54.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 55</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 55</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 55.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 56</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 56</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 56.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 57</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 57</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 57.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 58</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 58</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 58.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 59</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 59</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 59.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 60</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 60</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 60.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 61</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 61</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 61.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 62</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 62</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 62.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 63</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 63</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 63.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 64</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 64</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 64.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 65</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 65</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 65.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 66</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 66</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 66.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 67</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 67</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 67.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 68</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 68</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 68.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 69</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 69</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 69.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 70</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 70</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 70.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 71</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 71</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 71.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 72</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 72</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 72.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 73</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 73</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 73.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 74</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 74</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 74.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 75</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 75</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 75.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 76</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 76</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 76.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 77</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 77</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 77.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 78</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 78</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 78.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 79</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 79</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 79.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 80</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 80</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 80.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 81</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 81</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 81.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 82</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 82</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 82.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 83</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 83</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 83.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 84</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 84</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 84.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 85</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 85</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 85.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 86</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 86</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 86.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 87</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 87</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 87.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 88</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 88</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 88.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 89</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 89</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 89.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 90</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 90</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 90.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 91</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 91</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 91.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 92</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 92</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 92.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 93</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 93</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 93.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 94</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 94</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 94.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 95</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 95</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 95.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 96</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 96</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 96.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 97</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 97</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 97.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 98</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 98</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 98.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 99</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 99</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 99.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 100</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 100</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 100.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 101</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 101</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 101.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 102</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 102</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 102.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 103</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 103</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 103.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 104</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 104</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 104.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 105</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 105</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 105.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 106</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 106</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 106.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 107</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 107</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 107.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 108</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 108</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 108.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 109</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 109</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 109.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 110</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 110</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 110.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 111</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 111</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 111.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 112</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 112</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 112.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 113</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 113</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 113.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 114</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 114</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 114.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 115</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 115</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 115.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 116</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 116</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 116.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 117</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 117</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 117.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 118</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 118</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 118.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 119</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 119</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 119.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 120</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 120</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 120.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 121</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 121</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 121.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 122</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 122</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 122.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 123</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 123</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 123.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 124</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 124</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 124.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 125</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 125</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 125.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 126</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 126</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 126.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 127</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 127</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 127.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 128</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 128</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 128.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 129</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 129</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 129.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 130</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 130</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 130.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 131</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 131</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 131.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 132</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 132</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 132.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 133</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 133</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 133.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 134</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 134</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 134.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 135</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 135</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 135.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 136</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 136</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 136.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 137</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 137</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 137.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 138</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 138</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 138.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 139</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 139</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 139.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 140</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 140</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 140.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 141</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 141</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 141.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 142</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 142</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 142.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 143</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 143</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 143.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 144</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 144</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 144.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 145</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 145</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 145.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 146</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 146</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 146.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 147</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 147</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 147.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 148</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 148</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 148.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 149</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 149</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 149.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 150</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 150</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 150.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 151</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 151</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 151.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 152</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 152</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 152.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 153</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 153</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 153.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 154</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 154</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 154.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 155</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 155</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 155.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 156</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 156</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 156.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 157</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 157</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 157.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 158</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 158</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 158.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 159</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 159</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 159.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 160</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 160</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 160.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 161</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 161</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 161.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 162</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 162</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 162.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 163</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 163</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 163.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 164</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 164</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 164.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 165</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 165</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 165.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 166</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 166</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 166.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 167</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 167</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 167.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 168</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 168</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 168.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 169</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 169</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 169.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 170</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 170</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 170.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 171</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 171</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 171.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 172</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 172</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 172.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 173</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 173</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 173.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 174</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 174</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 174.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 175</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 175</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 175.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 176</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 176</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 176.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 177</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 177</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 177.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 178</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 178</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 178.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 179</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 179</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 179.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 180</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 180</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 180.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 181</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 181</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 181.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 182</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 182</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 182.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 183</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 183</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 183.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 184</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 184</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 184.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 185</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 185</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 185.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 186</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 186</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 186.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 187</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 187</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 187.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 188</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 188</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 188.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 189</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 189</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 189.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 190</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 190</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 190.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 191</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 191</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 191.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 192</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 192</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 192.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 193</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 193</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 193.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 194</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 194</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 194.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 195</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 195</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 195.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 196</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 196</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 196.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 197</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 197</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 197.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 198</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 198</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 198.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 199</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 199</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 199.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 200</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 200</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 200.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 201</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 201</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 201.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 202</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 202</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 202.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 203</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 203</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 203.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 204</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 204</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 204.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 205</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 205</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 205.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 206</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 206</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 206.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 207</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 207</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 207.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 208</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 208</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 208.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 209</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 209</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 209.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 210</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 210</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 210.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 211</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 211</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 211.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 212</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 212</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 212.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 213</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 213</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 213.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 214</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 214</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 214.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 215</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 215</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 215.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 216</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 216</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 216.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 217</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 217</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 217.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 218</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 218</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 218.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 219</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 219</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 219.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 220</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 220</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 220.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 221</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 221</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 221.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 222</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 222</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 222.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 223</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 223</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 223.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 224</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 224</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 224.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 225</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 225</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 225.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 226</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 226</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 226.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 227</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 227</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 227.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 228</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 228</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 228.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 229</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 229</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 229.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 230</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 230</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 230.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 231</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 231</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 231.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 232</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 232</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 232.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 233</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 233</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 233.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 234</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 234</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 234.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 235</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 235</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 235.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 236</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 236</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 236.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 237</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 237</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 237.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 238</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 238</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 238.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 239</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 239</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 239.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 240</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 240</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 240.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 241</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 241</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 241.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 242</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 242</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 242.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 243</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 243</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 243.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 244</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 244</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 244.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 245</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 245</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 245.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 246</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 246</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 246.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 247</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 247</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 247.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 248</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 248</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 248.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 249</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 249</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 249.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 250</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 250</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 250.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 251</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 251</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 251.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 252</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 252</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 252.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 253</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 253</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 253.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 254</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 254</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 254.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 255</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 255</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 255.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 256</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 256</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 256.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 257</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 257</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 257.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 258</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 258</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 258.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 259</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 259</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 259.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 260</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 260</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 260.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 261</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 261</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 261.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 262</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 262</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 262.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 263</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 263</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 263.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 264</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 264</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 264.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 265</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 265</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 265.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 266</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 266</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 266.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 267</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 267</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 267.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 268</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 268</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 268.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 269</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 269</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 269.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 270</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 270</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 270.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 271</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 271</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 271.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 272</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 272</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 272.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 273</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 273</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 273.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 274</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 274</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 274.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 275</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 275</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 275.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 276</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 276</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 276.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 277</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 277</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 277.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 278</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 278</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 278.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 279</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 279</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 279.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 280</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 280</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 280.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 281</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 281</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 281.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 282</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 282</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 282.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 283</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 283</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 283.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 284</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 284</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 284.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 285</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 285</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 285.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 286</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 286</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 286.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 287</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 287</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 287.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 288</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 288</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 288.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 289</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 289</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 289.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 290</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 290</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 290.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 291</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 291</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 291.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 292</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 292</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 292.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 293</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 293</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 293.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 294</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 294</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 294.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 295</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 295</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 295.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 296</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 296</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 296.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 297</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 297</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 297.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 298</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 298</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 298.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 299</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 299</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 299.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 300</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 300</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 300.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 301</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 301</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 301.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 302</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 302</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 302.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 303</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 303</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 303.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 304</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 304</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 304.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 305</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 305</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 305.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 306</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 306</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 306.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 307</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 307</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 307.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 308</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 308</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 308.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 309</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 309</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 309.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 310</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 310</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 310.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 311</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 311</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 311.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 312</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 312</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 312.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 313</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 313</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 313.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 314</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 314</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 314.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 315</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 315</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 315.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 316</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 316</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 316.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 317</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 317</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 317.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 318</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 318</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 318.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 319</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 319</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 319.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 320</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 320</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 320.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 321</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 321</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 321.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 322</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 322</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 322.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 323</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 323</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 323.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 324</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 324</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 324.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 325</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 325</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 325.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 326</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 326</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 326.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 327</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 327</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 327.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 328</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 328</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 328.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 329</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 329</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 329.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 330</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 330</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 330.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 331</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 331</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 331.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 332</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 332</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 332.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 333</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 333</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 333.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 334</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 334</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 334.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 335</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 335</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 335.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 336</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 336</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 336.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 337</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 337</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 337.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 338</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 338</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 338.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 339</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 339</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 339.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 340</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 340</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 340.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 341</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 341</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 341.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 342</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 342</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 342.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 343</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 343</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 343.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 344</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 344</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 344.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 345</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 345</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 345.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 346</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 346</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 346.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 347</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 347</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 347.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 348</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 348</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 348.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 349</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 349</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 349.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 350</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 350</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 350.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 351</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 351</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 351.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 352</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 352</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 352.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 353</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 353</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 353.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 354</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 354</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 354.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 355</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 355</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 355.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 356</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 356</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 356.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 357</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 357</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 357.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 358</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 358</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 358.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 359</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 359</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 359.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 360</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 360</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 360.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 361</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 361</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 361.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 362</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 362</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 362.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 363</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 363</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 363.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 364</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 364</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 364.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 365</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 365</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 365.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 366</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 366</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 366.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 367</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 367</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 367.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 368</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 368</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 368.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 369</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 369</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 369.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 370</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 370</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 370.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 371</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 371</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 371.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 372</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 372</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 372.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 373</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 373</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 373.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 374</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 374</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 374.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 375</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 375</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 375.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 376</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 376</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 376.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 377</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 377</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 377.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 378</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 378</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 378.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 379</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 379</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 379.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 380</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 380</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 380.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 381</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 381</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 381.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 382</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 382</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 382.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 383</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 383</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 383.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 384</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 384</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 384.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 385</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 385</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 385.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 386</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 386</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 386.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 387</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 387</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 387.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 388</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 388</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 388.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 389</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 389</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 389.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 390</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 390</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 390.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 391</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 391</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 391.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 392</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 392</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 392.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 393</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 393</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 393.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 394</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 394</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 394.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 395</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 395</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 395.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 396</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 396</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 396.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 397</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 397</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 397.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 398</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 398</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 398.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 399</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 399</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 399.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 400</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 400</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 400.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 401</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 401</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 401.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 402</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 402</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 402.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 403</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 403</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 403.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 404</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 404</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 404.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 405</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 405</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 405.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 406</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 406</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 406.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 407</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 407</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 407.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 408</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 408</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 408.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 409</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 409</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 409.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 410</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 410</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 410.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 411</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 411</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 411.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 412</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 412</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 412.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 413</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 413</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 413.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 414</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 414</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 414.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 415</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 415</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 415.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 416</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 416</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 416.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 417</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 417</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 417.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 418</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 418</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 418.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 419</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 419</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 419.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 420</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 420</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 420.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 421</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 421</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 421.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 422</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 422</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 422.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 423</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 423</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 423.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 424</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 424</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 424.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 425</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 425</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 425.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 426</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 426</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 426.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 427</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 427</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 427.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 428</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 428</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 428.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 429</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 429</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 429.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 430</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 430</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 430.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 431</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 431</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 431.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 432</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 432</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 432.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 433</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 433</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 433.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 434</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 434</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 434.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 435</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 435</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 435.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 436</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 436</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 436.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 437</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 437</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 437.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 438</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 438</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 438.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 439</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 439</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 439.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 440</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 440</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 440.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 441</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 441</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 441.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 442</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 442</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 442.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 443</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 443</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 443.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 444</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 444</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 444.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 445</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 445</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 445.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 446</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 446</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 446.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 447</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 447</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 447.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 448</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 448</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 448.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 449</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 449</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 449.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 450</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 450</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 450.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 451</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 451</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 451.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 452</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 452</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 452.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 453</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 453</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 453.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 454</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 454</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 454.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 455</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 455</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 455.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 456</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 456</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 456.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 457</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 457</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 457.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 458</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 458</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 458.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 459</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 459</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 459.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 460</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 460</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 460.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 461</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 461</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 461.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 462</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 462</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 462.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 463</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 463</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 463.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 464</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 464</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 464.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 465</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 465</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 465.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 466</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 466</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 466.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 467</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 467</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 467.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 468</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 468</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 468.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 469</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 469</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 469.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 470</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 470</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 470.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 471</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 471</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 471.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 472</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 472</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 472.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 473</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 473</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 473.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 474</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 474</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 474.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 475</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 475</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 475.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 476</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 476</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 476.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 477</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 477</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 477.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 478</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 478</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 478.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 479</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 479</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 479.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 480</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 480</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 480.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 481</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 481</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 481.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 482</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 482</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 482.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 483</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 483</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 483.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 484</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 484</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 484.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 485</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 485</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 485.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 486</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 486</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 486.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 487</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 487</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 487.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 488</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 488</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 488.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 489</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 489</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 489.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 490</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 490</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 490.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 491</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 491</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 491.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 492</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 492</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 492.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 493</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 493</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 493.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 494</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 494</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 494.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 495</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 495</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 495.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 496</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 496</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 496.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 497</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 497</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 497.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 498</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 498</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 498.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold uppercase text-brand-400">Section 499</span>
          <h4 className="text-xs font-bold text-slate-200">AdminControlPanelPage Sub-Panel 499</h4>
          <p className="text-[11px] text-slate-400">Real-time telemetry and workflow controls for step 499.</p>
        </div>
      </div>
    </div>
  );
};
